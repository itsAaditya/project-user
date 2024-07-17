import Login from '../app/login/page'

const Home = () => (
  <div>
    <section >
      <h1 className='head_text text-center'>
        &nbsp;&nbsp;&nbsp;&nbsp;Json Placeholder
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>Free Fake API - Users</span>
      </h1>
      <p className='desc text-center'>
        JSONPlaceholder is a free online REST API that you can use whenever you need some fake data.
        It can be in a README on GitHub.
      </p>
    </section>
    <br /><br /><br />
    <div>
      <Login  />
    </div>

  </div>
);

export default Home;