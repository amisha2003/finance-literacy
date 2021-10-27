import BuyNow from '../components/home/buyNow'
import Layout from '../components/layout'
export default function Home() {
  return (
    <Layout title = "Home Page">
      <BuyNow />
      {/* USE LAYOUT IN EVERYPAGE, HAVING PROPS LIKE    title, description, tagname  just as above*/}
      {/* you can leave passing props, as Layout contains some default value set in ../components/Layout */}
    </Layout>
  )
}
