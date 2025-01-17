import { ComponentMeta, Story } from '@storybook/react';
import noop from 'noop-ts';
import React from 'react';

import fakeAddress from '__mocks__/models/address';
import { assetData } from '__mocks__/models/asset';
import fakeProvider from '__mocks__/models/provider';
import { TESTNET_VBEP_TOKENS } from 'constants/tokens';
import { withAuthContext, withCenterStory, withEnabledToken } from 'stories/decorators';

import BorrowRepay, { BorrowRepayProps } from '.';

export default {
  title: 'Pages/Dashboard/Modals/BorrowRepay',
  component: BorrowRepay,
  decorators: [withCenterStory({ width: 600 })],
  parameters: {
    backgrounds: {
      default: 'Primary',
    },
  },
} as ComponentMeta<typeof BorrowRepay>;

const Template: Story<BorrowRepayProps> = args => <BorrowRepay {...args} />;

const context = {
  login: noop,
  logOut: noop,
  openAuthModal: noop,
  closeAuthModal: noop,
  provider: fakeProvider,
  isReconnecting: false,
  accountAddress: fakeAddress,
};

export const Disconnected = Template.bind({});
Disconnected.args = {
  vToken: TESTNET_VBEP_TOKENS['0x6d6f697e34145bb95c54e77482d97cc261dc237e'],
  onClose: noop,
};

export const Disabled = Template.bind({});
Disabled.decorators = [withAuthContext(context)];
Disabled.args = {
  vToken: TESTNET_VBEP_TOKENS['0x6d6f697e34145bb95c54e77482d97cc261dc237e'],
  onClose: noop,
};

export const Default = Template.bind({});
Default.decorators = [
  withAuthContext(context),
  withEnabledToken({
    token: assetData[0].vToken.underlyingToken,
    accountAddress: fakeAddress,
    spenderAddress: assetData[0].vToken.underlyingToken.address,
  }),
];
Default.args = {
  vToken: TESTNET_VBEP_TOKENS['0x6d6f697e34145bb95c54e77482d97cc261dc237e'],
  onClose: noop,
};
