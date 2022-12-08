import React from 'react';
import {
  Alert,
  Avatar,
  Badge,
  Burger,
  Notification,
  Overlay,
  Progress,
  RingProgress,
  Skeleton,
} from '../react-glassmorphism';

export const GetDemoComponent = (name) => {
  switch (name) {
    case 'Alert':
      return (
        <Alert
          title='This is title.'
          variant='filled'
          color='rgba(199, 31, 31, 0.3)'
          icon
          onClose={() => {
            console.log('Closed');
          }}
          radius={10}
          withCloseButton
        >
          This is sub-title.
        </Alert>
      );
    case 'Avatar':
      return (
        <Avatar
          alt='alt text'
          altColor='rgba(255, 255, 40, 0.7)'
          color='rgba(255, 255, 40, 0.2)'
          radius={5}
          size={50}
        />
      );
    case 'Badge':
      return (
        <Badge
          color='rgba(255, 255, 25, 0.3)'
          fontColor='rgba(0, 17, 17, 1)'
          radius={20}
          size={24}
        >
          A Badge
        </Badge>
      );
    case 'Burger':
      return (
        <React.Fragment>
          <Burger size={24} spacing={4} transitionTime={400} />
          <Burger size={24} spacing={4} transitionTime={400} opened />
        </React.Fragment>
      );
    case 'Notification':
      return (
        <Notification
          onClose={() => console.log('closed')}
          color='rgba(255, 255, 255, 0.2)'
          title='This is title.'
          radius={10}
          loading
        >
          This is sub title.
        </Notification>
      );
    case 'Overlay':
      return (
        <React.Fragment>
          <Overlay
            blur={100}
            color='rgba(234, 78, 78, 0.7)'
            opacity={0.5}
            radius={6}
            zIndex={10}
          />
          This is under Overlay. Try selecting me.
        </React.Fragment>
      );
    case 'Progress':
      return (
        <Progress
          barColor='rgba(79, 208, 74, 0.3)'
          color='rgba(228, 136, 109, 0.5)'
          radius={7}
          size={20}
          value={70}
          striped
          animate
        />
      );
    case 'Ring Progress':
      return (
        <RingProgress
          label='It goes in middle.'
          sections={[
            { value: 40, color: 'rgb(0, 255, 255, 0.3)' },
            { value: 15, color: 'rgb(255, 165, 0)' },
            { value: 15, color: 'rgb(255, 255, 0, 0.3)' },
          ]}
          size={150}
          thickness={10}
          roundCaps
        />
      );
    case 'Skeleton':
      return (
        <React.Fragment>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Skeleton height={50} radius={10} animate visible circle />
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <Skeleton height={20} width={240} radius={10} animate visible />
              <Skeleton height={20} width={240} radius={10} animate visible />
            </div>
          </div>
          <Skeleton height={20} width={300} radius={10} animate visible />
        </React.Fragment>
      );
  }
};
