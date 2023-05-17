import React from 'react';
import {
  Alert,
  Avatar,
  Badge,
  Burger,
  Button,
  CheckBox,
  Dropdown,
  Input,
  Notification,
  Overlay,
  Progress,
  RingProgress,
  Skeleton,
  SwitchBox,
} from 'react-glass-comps';

export const GetDemoComponent = (name) => {
  switch (name) {
    case 'Alert':
      return (
        <Alert icon withCloseButton>
          This is sub-title.
        </Alert>
      );
    case 'Avatar':
      return <Avatar />;
    case 'Badge':
      return <Badge>A Badge</Badge>;
    case 'Burger':
      return (
        <React.Fragment>
          <Burger />
          <Burger opened />
        </React.Fragment>
      );
    case 'Button':
      return <Button />;
    case 'CheckBox':
      return <CheckBox />;
    case 'Dropdown':
      return <Dropdown />;
    case 'Input':
      return <Input />;
    case 'Notification':
      return <Notification loading>This is sub title.</Notification>;
    case 'Overlay':
      return (
        <React.Fragment>
          <Overlay />
          <span style={{ userSelect: 'none' }}>
            This is under Overlay. Try selecting me.
          </span>
        </React.Fragment>
      );
    case 'Progress':
      return <Progress />;
    case 'Ring Progress':
      return <RingProgress roundCaps />;
    case 'Skeleton':
      return (
        <React.Fragment>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Skeleton height={50} radius={10} animate visible circle />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Skeleton animate visible />
              <Skeleton animate visible />
            </div>
          </div>
          <Skeleton width={300} animate visible />
        </React.Fragment>
      );
    case 'SwitchBox':
      return <SwitchBox />;
  }
};
