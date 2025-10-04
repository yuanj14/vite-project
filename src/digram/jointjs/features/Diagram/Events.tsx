import React, { useRef, useEffect } from "react";
import { dia, g, shapes, ui } from "@joint/plus";
import { MyShape } from "../CustomizingShapes/Myshape"; // 导入自定义形状
import "../../App.css";

export default function Events(): React.ReactElement {
  useEffect(() => {
    const graphRef = useRef<dia.Graph | null>(null);
    const paperRef = useRef<HTMLDivElement>(null);
    const paperInstanceRef = useRef<dia.Paper | null>(null);
    
    return () => {
      
    };
  }, []);

  return (
    <div>
      <h3>JointJS 事件处理</h3>
      <div ref={paperRef}></div>
    </div>
  );
}
