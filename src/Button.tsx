import React from "react";
import s from './Button.module.css';

type ButtonPropsName = {
  title?: string
  callBack?:() => void
  onClick?: () => void
  disabled?: boolean
  // startValue?: number
  // disabled?: boolean
}
export const Button = (props: ButtonPropsName) => {
  
  return (
    <div style={{margin: '0 auto'}}>
      <button 
        className={s.button}
        onClick={props.callBack}
        disabled={props.disabled}
      >
        <span>{props.title}</span> 
      </button>
    </div>
  );
}