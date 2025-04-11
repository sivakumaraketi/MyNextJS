"use client";
import React from 'react';
import ImageSlider from '../utils/image-slider';
import { useTheme } from '../components/themeProvider';
import ClientSideFunction from '../utils/client-utils';

const ClientRouterPage = () =>  {

  const theme = useTheme();

  const result = ClientSideFunction();

      return (
        <div style={{ width: '80%', margin: '0 auto' }}>
         <ImageSlider />
          <h1 style={{
            color: theme.colors.primary
          }}>{result}</h1>
          </div>
      )
    }
export default ClientRouterPage;