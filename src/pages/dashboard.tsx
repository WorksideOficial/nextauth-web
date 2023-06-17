import { GetServerSideProps } from "next";
import { getSession, signOut, useSession } from "next-auth/react"

export default function Dashboard() {
  const { data: session } = useSession();
  return (
    <section className="flex items-center justify-center h-[100vh]">
      <div className="flex flex-col items-center">
        <h2 className="m-[1rem] font-extrabold text-[30px]">Dashboard</h2>
        {session?.user?.name}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}