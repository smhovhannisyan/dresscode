import React from 'react';
import { storiesOf } from '@storybook/react';

import { ItemGroup } from '../../helpers/ItemGroup';
import { ItemRow } from '../../helpers/ItemRow';
import { Item } from '../../helpers/Item';
import { ColorScheme } from '../../helpers/ColorScheme';

storiesOf('Color Scheme', module)
  .add('Color Scheme', () => {
    return (
      <>
        <ItemGroup
          title='Primary Colors'
        >
          <ItemRow>
            <Item>
              <ColorScheme
                text='P1'
                name='#6400DC'
                bgClassName='violet-300'
              >
              </ColorScheme>
            </Item>
            <Item>
              <ColorScheme
                text='P2'
                name='#7F7F7F'
                bgClassName='neutral-500'
              >
              </ColorScheme>
            </Item>
            <Item>
              <ColorScheme
                text='Neutral White'
                name='#FFFFFF'
                bgClassName='neutral-white'
              >
              </ColorScheme>
            </Item>
          </ItemRow>
        </ItemGroup>
        <ItemGroup
          title='Secondary Colors'
        >
          <ItemRow>
            <Item>
              <ColorScheme
                text='S1'
                name='#6400DC'
                secondaryName='#8133E0'
                secondaryClassName='violet-300-gradient'
              >
              </ColorScheme>
            </Item>
          </ItemRow>
        </ItemGroup>
        <ItemGroup
          title='Alert'
        >
          <ItemRow>
            <Item>
              <ColorScheme
                text='R300'
                name='#FF5252'
                bgClassName='red-300'
              >
              </ColorScheme>
            </Item>
            <Item>
              <ColorScheme
                text='Y300'
                name='#F7D210'
                bgClassName='yellow-300'
              >
              </ColorScheme>
            </Item>
            <Item>
              <ColorScheme
                text='G300'
                name='#32C86D'
                bgClassName='green-300'
              >
              </ColorScheme>
            </Item>

          </ItemRow>
        </ItemGroup>
        <ItemGroup
          title=''
        >
          <ItemRow>
            <ItemGroup
              title='Neutral'
            >
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='Neutral White'
                    name='#FFFFFF'
                    bgClassName='neutral-white'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='Neutral 75'
                    name='#F1F1F1'
                    bgClassName='neutral-75'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='Neutral 100'
                    name='#E5E5E5'
                    bgClassName='neutral-100'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='Neutral 200'
                    name='#CCCCCC'
                    bgClassName='neutral-200'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='Neutral 500'
                    name='#7F7F7F'
                    bgClassName='neutral-500'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='Neutral 800'
                    name='#333333'
                    bgClassName='neutral-800'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='Neutral 900'
                    name='#1D1D1D'
                    bgClassName='neutral-900'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='Neutral 1000'
                    name='#000000'
                    bgClassName='neutral-1000'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
            </ItemGroup>
            <ItemGroup
              title='Red'
            >
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='R50'
                    name='#FFEEEE'
                    bgClassName='red-50'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='R75'
                    name='#FFB3B3'
                    bgClassName='red-75'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='R100'
                    name='#FF8585'
                    bgClassName='red-100'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='R300'
                    name='#FF5252'
                    bgClassName='red-300'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='R400'
                    name='#CC4141'
                    bgClassName='red-400'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='R500'
                    name='#8F2D2D'
                    bgClassName='red-500'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
            </ItemGroup>
            <ItemGroup
              title='Green'
            >
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='G50'
                    name='#EBFAF1'
                    bgClassName='green-50'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='G75'
                    name='#A7EFC2'
                    bgClassName='green-75'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='G100'
                    name='#6FDE9A'
                    bgClassName='green-100'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='G300'
                    name='#32C86D'
                    bgClassName='green-300'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='G400'
                    name='#28A057'
                    bgClassName='green-400'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='G500'
                    name='#0D7837'
                    bgClassName='green-500'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
            </ItemGroup>
            <ItemGroup
              title='Yellow'
            >
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='Y50'
                    name='#FFF8D6'
                    bgClassName='yellow-50'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='Y75'
                    name='#FDEDA4'
                    bgClassName='yellow-75'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='Y100'
                    name='#FBE277'
                    bgClassName='yellow-100'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='Y300'
                    name='#F7D210'
                    bgClassName='yellow-300'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='Y400'
                    name='#D5AD00'
                    bgClassName='yellow-400'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='Y500'
                    name='#B99600'
                    bgClassName='yellow-500'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
            </ItemGroup>
            <ItemGroup
              title='Violet'
            >
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='V50'
                    name='#E6D2FF'
                    bgClassName='violet-50'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='V75'
                    name='#CDA5FF'
                    bgClassName='violet-75'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='V100'
                    name='#A266EA'
                    bgClassName='violet-100'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='V300'
                    name='#6400DC'
                    bgClassName='violet-300'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='V400'
                    name='#46009A'
                    bgClassName='violet-400'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
              <ItemRow>
                <Item>
                  <ColorScheme
                    text='V500'
                    name='#23004D'
                    bgClassName='violet-500'
                  >
                  </ColorScheme>
                </Item>
              </ItemRow>
            </ItemGroup>
          </ItemRow>
        </ItemGroup>
      </>
    );
  });
