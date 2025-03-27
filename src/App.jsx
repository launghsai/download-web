import { useState, useRef } from 'react'
import './App.css'
import { base_image } from './imgfile';
import './Fonts/fonts.css';

function App() {
  const [count, setCount] = useState(0)
  const downloadLinkRef = useRef(null);
  // const image_url = "https://ntl-ins-productfact.s3.ap-southeast-1.amazonaws.com/dev/non-motor/fire/artwork/default.png?X-Amz-Expires=3600&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZV4XIOLR53GLLYVR%2F20250325%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20250325T083821Z&X-Amz-SignedHeaders=host&X-Amz-Signature=f6cc78451125653687523bb581d4ac56a91655076cb4edf000c0da8e5ee9ce01"
  // const image_url = "https://media-hosting.imagekit.io//0a66fc04a37f4c9b/blur1.jpg?Expires=1837501801&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ctECTeh6KT1B8XXjv3fFYVnNOgCkqaPIHBePEIqmm-4wlMWL4F2IqABZMQl8aANzaorP0w1jMzwrKnZrn-LKJTSH3VBTUdrbEOxOqgWqWqOaet5uDX9xtWDNFuNSaMvGYFDIFKlkddT7pTP8LcGrr-dH2y1NkBj4CR03he5bo5PW2X2ViP~Xxne8eJiCnxR2q9wQPHbddV7AopiTwnzVKS0SEnrglQw8y4m~50uxRzkAlmQqcupQCcBwmbjqpAjb9LUqFZW-xXfCbg0Z-eKw34ojDZYK~9AOnrnU2YLYOxnHnetIm-eL1S8GZ432qY1tRxKfsPSifDcc8ma246g8rg__"
  // const image_url = "https://plus.unsplash.com/premium_photo-1669839774770-df5a3d2da257?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // const image_url = "https://ntl-ins-productfact.s3.ap-southeast-1.amazonaws.com/dev/non-motor/fire/artwork/default.png?X-Amz-Expires=3600&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZV4XIOLR53GLLYVR%2F20250325%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20250325T083821Z&X-Amz-SignedHeaders=host&X-Amz-Signature=f6cc78451125653687523bb581d4ac56a91655076cb4edf000c0da8e5ee9ce01"
  const image_url = "https://productfact-storage-nonprod.areegator.com/dev/non-motor/fire/artwork/default.png"
  const imageName = "img-1"
  const downloadpress = () => {
    alert("HELO")
  }

  // const handleDownload = () => {
  //   window.open(image_url, '_blank');
  // };
  const handleDownload = async () => {
    // let ismobile=true
    try {
      if (isReactNativeWebView()) {
        // SendMessageToApp(image_url)
        SendMessageToApp(base_image)
      } else {
        const response = await fetch(image_url);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

      }
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };
  // const handleDownload = () => {
  //   const link = document.createElement('a');
  //   link.href = image_url;
  //   link.download = 'image.jpg'; // ชื่อไฟล์ที่จะบันทึก
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  // function isReactNativeWebView() {
  //   return typeof window.ReactNativeWebView !== 'undefined';
  // }
  function isReactNativeWebView() {
    return typeof window.isReactNativeWebView !== 'undefined' && window.isReactNativeWebView === true;
  }

  const SendMessageToApp = (data) => {
    if (window?.ReactNativeWebView?.postMessage !== undefined) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: 'download', url: data })
      );
    }
  };

  const Base64Image = ({ base64Data }) => {
    return (
      <img src={`data:image/png;base64,${base64Data}`} alt="Base64 Image" width={600} height={400} />
      // <img src={`data:image/png;base64,${base64Data}`} alt="Base64 Image" />
    );
  };


  return (
    <div style={{ margin: 'auto' }}>
      {/* <button onClick={downloadpress} style={styles.button}>Download</button> */}
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', }}>
        {/* <img src={image_url} alt={imageName} width={400} height={400} /> */}
        <div style={{margin:'auto',marginTop:30}} >
        <Base64Image base64Data={base_image} />
        </div>
       
        <button style={{ height: 50, borderRadius: 5, backgroundColor: 'silver' }} onClick={handleDownload}>Download</button>
        {/* <button onClick={clickme}>Click here</button> */}
        <div style={{margin:'auto',maxWidth:'60%',marginTop:30}}>
        <div style={{ fontFamily: 'NTL_Font',fontSize:20 }}>
          มีบางคำที่ยังค้างคาจากชายชราผู้เปลี่ยวเหงา
          วันเวลากำลังจะพรากเอาตัวของเขาคืนสู่ดิน
          หมื่นความฝันที่มีแต่ไม่เคยโบยบินหมื่นคำถามที่ยังกัดกินใจอยู่
          ว่าในตอนมีแรงทำไมไม่ทำไม่รู้มานั่งคิดดูโคตรเสียดาย
          อยากจะไปยังที่ใดก็ต้องมารอใครต่อใครพร้อม
          อยากจะเดินทางไกลอย่างใจที่หมายปองก็ต้องมารอวันเวลา
          ก็จนมารู้สึกตัวมันก็เกินความฝันหมดไปแล้วพลังที่เราเคยมีอยู่
          แล้วในตอนมีแรงทำไมไม่ไปไม่รู้มานั่งคิดดูโคตรเสียดาย
          อยากจะย้อนกลับไปแก้ไข
          อยากกลับไปใช้ช่วงเวลาให้พอใจ
          เพราะถ้าฉันรู้แบบนี้ก็คงไม่รอให้มันสาย
          ถ้าเกิดสุดท้ายต้องมาเสียดายคืนวัน
          ความฝันที่หลุดลอยเพราะฉันมัวคอยเวลาอยู่อย่างนั้น
          ในตอนนี้ที่ทำไว้คือหายใจเพื่อผ่านวันระลึกความฝันที่หล่นหาย
          หากฉันรู้สึกว่ารักใครฉันน่าจะบอกไปตั้งแต่ตอนนั้น
          บอกคำรักให้กันได้ฟังในตอนที่ยังคงพบเจอ
          แต่เมื่อพอมันช้าไปเราก็ต่างเลือนหาย
          บทสุดท้ายเราก็ต้องตายจากกัน
          มันก็เลยกลายเป็นความรัก
          ที่ยังสถิตในใจฉันแค่คนที่ควรฟังเขาไม่มีอยู่แล้ว
          อยากจะย้อนกลับแก้ไข
          อยากกลับไปใช้คำว่ารักที่ค้างคาใจ
          เพราะถ้ารู้แบบนี้ก็คงไม่รอให้มันสาย
          ถ้าเกิดสุดท้ายต้องมาเสียดายคืนวัน
          ใจฉันที่หลุดลอยเพราะฉันมัวคอยเวลาอยู่อย่างนั้น
          ในตอนนี้ที่ทำไว้คือหายใจเพื่อผ่านวันระลึกถึงกันได้แค่นี้
          อยากจะไปยังที่ใดก็ต้องมารอใครต่อใครพร้อม
          อยากจะเดินทางไกลอย่างใจที่หมายปองก็ต้องมารอวันเวลา
          ก็จนมารู้สึกตัวมันก็เกินความฝันหมดไปแล้วพลังที่เราเคยมีอยู่
          แล้วในตอนมีแรงทำไมไม่ไปไม่รู้มานั่งคิดดูโคตรเสียดาย</div>
        </div>
        
      </div>
    </div>
  )
}

export default App

const styles = {
  button: {
    width: 300,
    height: 30,

  }
}
