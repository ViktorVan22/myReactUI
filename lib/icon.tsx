import React from 'react';
import './importIcons'

// interface定义属性类型
interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> =(props)=>{

  return (
    <span>{props.name}</span>
  )
}

export default Icon;