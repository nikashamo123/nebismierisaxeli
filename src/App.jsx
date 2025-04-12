import { useState } from "react";
import "./App.css";



function App() {
  
  const images = [
    "https://s3-alpha-sig.figma.com/img/f711/756b/d02ccc2096958b6d713b9617cc766510?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DX3qDqjicRLmqoFSJ3kJu~YXjzmdUQEqhdztH0utOYSPBR87T0NyS3PQB6xiWt~wUbNsWhSelATkz4UZyLvBj0WgYKrbh6sBqYUZ4-cS3-1JTi6MabAzwO0tQcMcLsc1WcoqoSyRAoVz4iVDw7q6w2eXFeE7lIbaKSN5P5399epn5~DnJidW2wjHWR8p66Bv8l1p1YDzbdkLQ033oDTCZSHZ9gb4-OLbKtFRGZXaZxlMBn8JflOyYpR2-oC6DNdytAqsrZphil-pVFqpmDEqlAlGXLS2Kz3zjVJkIxPx7gN5CV0NOOj6wrXt4E6ICGCQpcaWt9P7o~9KTrSHY5o-BQ__",
    "https://s3-alpha-sig.figma.com/img/0938/407f/9894e0bca687c207d22c076e4983ab08?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=giaNQeRR9~H95sXPPKl0DcI4vSkglb1sLyTjI7zRQEFW-kHg1fy3o474DwA2qtYL-FP2jNmdiSzDm1iYpeXczF70UnPj00gR-SZzTcdVfEbeGkRrMMgULpnH~2Tp~9NZt448WxAjskuQnsG~8jkL9FqFFS6diezPo6ThyqQpcDS4wfau17Suq3yplllj6FS51SeyVcA1d1nflk~~nMQJlVYSZWQ63BINlKNYG~iMFDYSePDGIqMhvZYYZWVh8xCo74dqQUhrG~kJDkCMFg2oih25zjmvroPWCLHMmFdC-Hq~~vJhzEr4p7tiMNsb96br6KMGTCEHKNdKgOzusn373Q__",
    "https://s3-alpha-sig.figma.com/img/05b8/6b4d/0177d642e5921db60f8ba10ca0f7120d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IG3-nWhZ-kzkW1SlnjRPMYmUxPUuxOnwntBLZ7WPlABLuGRCPgn4TP~EY0ka3fwf8~S5bA8OFFOGxq5s~9M1OixKEMWwNjdWJi-~8nP7BwtCkaW16MtFBAdTRVsdh6UUHFPOTj92GYng2VdHt19fcg1uHR~rO2B7zRo7~-LnjD1Wk4Gn4W3D-HOvocpZKvOUKRFJWRX6RCNTby4F-ZQqAuUIVFrcAIfLl9AVa2iJvd4ZIFMMpfsTVSJkK~xC63hY4QDl4wk-15IQRvEnmYgMAEm9xm0cPeX6XiLg3KtRCQw-SbJhI1GipVtQJ492zODisdG3ZPWHL5vB7InzvqBOyA__",
    "https://s3-alpha-sig.figma.com/img/7150/957b/ee07a0a68e7104851a741ab805e57f36?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GfpY8hM77o2KOTyZYxTFtokhTq~RgbYMqpZUtk9yfZ-tgHf0Km4WUuGR7jG8WFONT4DxjjuOcXn9PA7VLDyilVh1ORNe6HoIS8LLMzHk7OmWdxHmqjfqhFGaQQdv~ArlcHgofgk9tpxFLu5NILnoDf1uhGQemnt9oVkh2gv62Ld~Tq0RTUwl~-4x85c0FOWvhMQ5PIdAzcrWcwaDMmR2BmNeBmo1Hl5B5ESLWwd1oaPe5hDgiyTqVSvyYFZfUAzc9cmosjrmZjWyAb072Xju2REGMCw7daygw4O8PuV4UU-oAHPg1lZcVpwWvF28T6gQyJPiGAVMWQzu3HdKk3bfVA__"
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [num, setNum] = useState(1);
  const [cartList, setCartList] = useState([]);

  let info = {
    id: 1,
    company: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    currentPrice: 125,
    beforeDiscount: 250,
    percentage: 50,
  };

  function damateba() {
    info.total = info.currentPrice * num

    setCartList( [...cartList, info] )
    console.log(cartList);
        
  }

  const [showMiniDiv, setShowMiniDiv] = useState(false);

  return (
    <>
      <div className="layout">
        <h1>sneakers</h1>
        <p>Collections</p>
        <p>Men</p>
        <p>Women</p>
        <p>About</p>
        <p>Contact</p>
        <img
          className="logo"
          src="data:image/png;base64,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"
          alt=""
          onClick={() => setShowMiniDiv(!showMiniDiv)}
        />
        {showMiniDiv && (
          <div
            style={{
              position: "absolute",
              top: "100px",
              left: "50px",
              width: "200px",
              height: "200px",
              backgroundColor: "lightgray",
              border: "1px solid black",
              zIndex: 1000,
              marginLeft: "1110px",
              marginTop: "-40px",
              overflowY: "auto",
              padding: "10px",
            }}
          >
            {cartList.map((item, index) => (
              <div key={index}>
                <img
                  src={currentImage}
                  alt="Selected Sneaker"
                  style={{ width: "100px", height: "100px", display: "block", margin: "0 auto" }}
                />
                <p style={{ textAlign: "center" }}>{item.title}</p>
                <p style={{ textAlign: "center" }}>Quantity: {num}</p>
                <p style={{ textAlign: "center" }}>Total: ${item.total}</p>
                <button
                  onClick={() => {
                    const updatedCartList = cartList.filter((_, i) => i !== index);
                    setCartList(updatedCartList);
                  }}
                  style={{
                    display: "block",
                    margin: "10px auto",
                    padding: "5px 10px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <section>
        <div className="left">
          <img
            className="currentIMG"
            src={currentImage}
            alt=""
            style={{ width: "400px", height: "400px", display: "block", margin: "0 auto" }}
          />
          <div className="allImgs" style={{ textAlign: "center" }}>
            {images.map((item) => (
              <img
                onClick={() => setCurrentImage(item)}
                src={item}
                alt=""
                style={{ width: "100px", height: "100px", margin: "10px", cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
        <div className="right">
          <h3>{info.company}</h3>
          <h1>{info.title}</h1>
          <p>{info.description}</p>
          <h6>
            ${info.currentPrice} | <span>{info.percentage}%</span>
          </h6>
          <h5>${info.beforeDiscount}</h5>
          <div className="raodenoba">
            <button onClick={() => setNum(num > 1 ? num - 1 : 1)}>-</button>
            <h2>{num}</h2>
            <button onClick={() => setNum(num + 1)}>+</button>
            <button onClick={damateba}>Add To Cart</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
