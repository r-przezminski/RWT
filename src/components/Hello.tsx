import * as React from 'react';
import './hello.scss';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <h1 className='test-css'>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);
