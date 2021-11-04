import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Text = styled.p`
  margin-bottom: .5rem;
  font-size: 1rem;
  color: #373737;
`;

const TratedText = ({ children }) => {
  const [text, setText] = useState(undefined);
  useEffect(() => {
    if(typeof(children) === 'string') {
      setText(children.split("<br/>"))
    }
  }, [children])
  
  return (
    <Text>  
      {text && text.map(paragraph => (
        <>
          {paragraph}
          <br/>
          <br/>
        </>
      ))}
    </Text>
  );
}

export default TratedText;