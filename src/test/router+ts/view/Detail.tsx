import React from "react";
import { useEffect } from "react";
import store from "../redux/store";
import type { RouteComponentProps } from "react-router-dom";
export default function Detail(props: RouteComponentProps) {
  //动态路由定义 /detail/:id => 通过props.match.params.id获取id
  //挂载注册DOM
  useEffect(() => {
    console.log(props.match.params);

    store.dispatch({
      type: "hide",
    });

    return () => {
      store.dispatch({
        type: "show",
      });
    };
  }, []);

  return (
    <div
      onClick={() => {
        props.history.goBack();
      }}
    >
      {store.getState().isShow.toString()}-
      Detail-{(props.match.params as any).id}
    </div>
  );
}
