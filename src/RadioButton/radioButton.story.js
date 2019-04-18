import React from 'react';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';

import { RadioButton } from '.';

import { ItemGroup } from '../helpers/ItemGroup';
import { ItemRow } from '../helpers/ItemRow';
import { Item } from '../helpers/Item';
import { Label } from '../Label';

const store = new Store({
  radio: 'radio4',
});

function handler({ target }) {
  store.set({
    ...store.state,
    ...{
      [target.name]: target.value,
    },
  });
}

storiesOf('Form controls', module)
  .add('Radio Button', () => (
    <State store={store}>
      {state => (
        <ItemGroup
          title='Radio Button'
        >
          <ItemRow>
            <Item>
              <Label
                display='col'
              >
                <RadioButton
                  checked={state.radio === 'radio1'}
                  onChange={handler}
                  value='radio1'
                  name='radio'
                />
                Այ էս մեկը
              </Label>
            </Item>
          </ItemRow>
          <ItemRow>
            <Item>
              <Label
                display='col'
              >
                <RadioButton
                  checked={state.radio === 'radio2'}
                  onChange={handler}
                  value='radio2'
                  name='radio'
                />
                Համարյա էս մեկը
              </Label>
            </Item>
          </ItemRow>
          <ItemRow>
            <Item>
              <Label
                display='col'
                disabled
              >
                <RadioButton
                  checked={state.radio === 'radio3'}
                  onChange={handler}
                  value='radio3'
                  name='radio'
                  disabled
                />
                էս մեկը չես կարա
              </Label>
            </Item>
          </ItemRow>
          <ItemRow>
            <Item>
              <Label
                display='col'
                disabled
              >
                <RadioButton
                  checked={state.radio === 'radio4'}
                  onChange={handler}
                  value='radio4'
                  name='radio'
                  disabled
                />
                էս մեկն էլ
              </Label>
            </Item>
          </ItemRow>
        </ItemGroup>
      )}
    </State>
  ));
