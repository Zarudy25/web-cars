function LoginPage() {
  return (
    <section className="auth-card">
      <p className="eyebrow">Login page</p>
      <h1>Inicia sesión</h1>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="tu@email.com" />

        <label htmlFor="password">Contraseña</label>
        <input id="password" name="password" type="password" placeholder="••••••••" />

        <button type="submit">Entrar</button>
      </form>
    </section>
  )
}

export default LoginPage
