import React from 'react';
import { storiesOf } from '@storybook/react';

import { ColorScheme } from '.';

import { ItemGroup } from '../ItemGroup';
import { ItemRow } from '../ItemRow';
import { Item } from '../Item';

storiesOf('Color Scheme', module)
  .add('Color Scheme', () => (
    <>
      <ItemGroup
        title='Primary Colors'
      >
        <ItemRow>
          <Item>
            <ColorScheme
              text='P1'
              name='#3228C6'
              bgClassName='blue-300'
            />
          </Item>
          <Item>
            <ColorScheme
              text='P2'
              name='#00A677'
              bgClassName='green-300'
            />
          </Item>
          <Item>
            <ColorScheme
              text='Neutral White'
              name='#FFFFFF'
              bgClassName='neutral-white'
            />
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
            />
          </Item>
          <Item>
            <ColorScheme
              text='Y300'
              name='#F8A90C'
              bgClassName='yellow-300'
            />
          </Item>
          <Item>
            <ColorScheme
              text='G300'
              name='#00A677'
              bgClassName='green-300'
            />
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
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='Neutral 75'
                  name='#F1F1F1'
                  bgClassName='neutral-75'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='Neutral 100'
                  name='#E5E5E5'
                  bgClassName='neutral-100'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='Neutral 200'
                  name='#CCCCCC'
                  bgClassName='neutral-200'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='Neutral 500'
                  name='#7F7F7F'
                  bgClassName='neutral-500'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='Neutral 800'
                  name='#333333'
                  bgClassName='neutral-800'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='Neutral 900'
                  name='#1D1D1D'
                  bgClassName='neutral-900'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='Neutral 1000'
                  name='#000000'
                  bgClassName='neutral-1000'
                />
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
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='R75'
                  name='#FFCCCC'
                  bgClassName='red-75'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='R100'
                  name='#FF8585'
                  bgClassName='red-100'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='R300'
                  name='#FF5252'
                  bgClassName='red-300'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='R400'
                  name='#CC4141'
                  bgClassName='red-400'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='R500'
                  name='#8F2D2D'
                  bgClassName='red-500'
                />
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
                  name='#DFFBF3'
                  bgClassName='green-50'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='G75'
                  name='#7FF0D0'
                  bgClassName='green-75'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='G100'
                  name='#00E1A1'
                  bgClassName='green-100'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='G300'
                  name='#00A677'
                  bgClassName='green-300'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='G400'
                  name='#006649'
                  bgClassName='green-400'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='G500'
                  name='#003928'
                  bgClassName='green-500'
                />
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
                  name='#FFF2D7'
                  bgClassName='yellow-50'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='Y75'
                  name='#FFDD99'
                  bgClassName='yellow-75'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='Y100'
                  name='#FFC34D'
                  bgClassName='yellow-100'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='Y300'
                  name='#F8A90C'
                  bgClassName='yellow-300'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='Y400'
                  name='#CA8700'
                  bgClassName='yellow-400'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='Y500'
                  name='#9B6800'
                  bgClassName='yellow-500'
                />
              </Item>
            </ItemRow>
          </ItemGroup>
          <ItemGroup
            title='Blue'
          >
            <ItemRow>
              <Item>
                <ColorScheme
                  text='B50'
                  name='#F2F1FB'
                  bgClassName='blue-50'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='B75'
                  name='#AEAAE9'
                  bgClassName='blue-75'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='B100'
                  name='#6F68D7'
                  bgClassName='blue-100'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='B300'
                  name='#3228C6'
                  bgClassName='blue-300'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='B400'
                  name='#080081'
                  bgClassName='blue-400'
                />
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <ColorScheme
                  text='B500'
                  name='#040044'
                  bgClassName='blue-500'
                />
              </Item>
            </ItemRow>
          </ItemGroup>
        </ItemRow>
      </ItemGroup>
    </>
  ));
