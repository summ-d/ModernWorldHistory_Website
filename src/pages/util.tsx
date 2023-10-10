import styled from 'styled-components';
import React from 'react';
import './App.css'



export type Props = {
  children?: JSX.Element | JSX.Element[];
  name?: any;
  id?: any;
  element?: Node;
}

export const Member = (props: Props) => {
  
  return(
    <div className='ctncld'>
      {props.children}
    </div>
  )
}

export const Collapsable = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className='container'>
      <button id='toggle' onClick={toggle}>{props.name}</button>
      <div className={open ? 'content-show': 'content-hide'}>
        <div className='content-show'>{props.children}</div>
      </div>
    </div>
  )
}

export function Image(img: Props) {
  const Img = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${img.name}');
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  `;
  return (
    <Img id='children'>
        {img.children}
    </Img>
  )
}

export const SideBar = (props: Props) => {
  return(
    <Collapsable name={props.name}> 
      
    </Collapsable>
  )
}

export function add(props: Props){
  props.element?.appendChild(document.createTextNode(props.name));
  document.getElementById('collapse')?.appendChild(props.element!);
}

export function TopBar(){
  return(
    <div>
      <Collapsable name='Projects'>
        <div id='collapse'>
          <a href='./pages/CommAfAs'>
            <button className='proj1'>Go To Communities in AfroEurasia</button>
          </a>
        </div>
      </Collapsable>
    </div>
  )
}