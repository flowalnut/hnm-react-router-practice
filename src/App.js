import './App.reset.css';
import './App.root.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';


//1.전체 상품 페이지/로그인 페이지/상품 상세 페이지
//1-1.네비게이션 바바
//2.전체 상품 페이지에서는 전체 상품을 볼 수 있다.
//3.로그인 버튼을 누르면 로그인 페이지로
//4.상품을 누르면 로그인 안돼있으면 로그인 페이지로
//5.상품을 누르면 로그인 돼있으면 상품 상세페이지로
//6.로그아웃버튼을 누르면 로그아웃이 된다
//7.로그아웃이 되면 상세페이지를 볼 수 없다. 다시 로그인 페이지로 가야한다
//8.로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
//9.상품을 검색할 수 있다. 
function App() {
  return (
    <div>
      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
