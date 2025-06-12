import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
function App() {
  return (
    <>
      <Header title="creando y usando props" show={false}>
        <h2>koalaaaa</h2>
      </Header>
      <section className='section'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quos repellendus explicabo praesentium, laboriosam iure, aperiam enim error magnam soluta consectetur ad obcaecati dolorem, qui voluptatem inventore iste voluptatibus eaque.</p>
      </section>
      <Section/>
      <Footer />
    </>

  )
}

export default App
