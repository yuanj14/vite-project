import React from "react";
import Indexrouter from "./test/router+ts/router/indexrouter";
import { useEffect, useState } from "react";
import store from "./test/router+ts/redux/store";
export default function App() {
  const [isshow, setIsshow] = useState(true);
  useEffect(() => {
    store.subscribe(() => {
      console.log('store发生变化了');
      setIsshow(store.getState().isShow);
    });

    return () => {};
  }, []);

  return (
    <div>
      <Indexrouter />
      {isshow && (
        <ul>
          <li>电影</li>
          <li>影院</li>
          <li>我的</li>
        </ul>
      )}
      {/* {flag && <div>123</div>}
      <button onClick={() => {
        flag = !flag;
        console.log(flag);
        
      }}>
        change
      </button> */}
    </div>
  );
}
