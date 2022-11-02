import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <div className="Foto">
        <img src="2.jpeg" />
      </div>
      <div className="Deskripsi">
        <p className="Cate">Tempat Belanjamu</p>
        <h1 className="Title">MEPAW</h1>
        <p className="Price">
          number : <span className="barang">1000+ barang</span>
        </p>
        <p className="Info">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          indus-try. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <p className="tipe">type :</p>
        <div className="tabel">
          <div className="satu">HP</div>
          <div className="dua">APK</div>
          <div className="tiga">TV</div>
          <div className="empat">PC</div>
        </div>
        <div className="keranjang">
          <div className="jang">Keranjang</div>
          <div className="ket">Paket</div>
        </div>
      </div>
    </div>
  );
}

export default App;
