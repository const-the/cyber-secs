import Logo from "../components/Logo"
function Home() {
  return (
    <>
      <Logo withBorder={true}/>
      <h1>Hewwo :3</h1>
      <p><a href="/login">Logowanie</a></p>
      <p><a href="/register">Rejestracja</a></p>
    </>
  )
}

export default Home
