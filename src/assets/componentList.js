export const componentList = [
  {
    name: 'Alert',
    description: 'Attract user attention with important static message',
    props: [
      {
        propName: 'title',
        propsType: 'String',
        propsExample: 'title="This is a title."',
      },
      {
        propName: 'variant',
        propsType: 'light | outline | filled',
        propsExample: 'variant="filled"',
      },
      {
        propName: 'color',
        propsType: 'rgba value',
        propsExample: 'color="rgba(222, 21, 21, 0.5)"',
      },
      {
        propName: 'fontColor',
        propsType: 'rgba value',
        propsExample: 'fontColor="rgba(66, 18, 18, 0.5)"',
      },
      {
        propName: 'icon',
        propsType: 'boolene',
        propsExample: 'icon',
      },
      {
        propName: 'onClose',
        propsType: 'function',
        propsExample: `onClose={() => {console.log('Closed')}}`,
      },
      {
        propName: 'radius',
        propsType: 'number',
        propsExample: 'radius={10}',
      },
      {
        propName: 'withCloseButton',
        propsType: 'boolene',
        propsExample: 'withCloseButton',
      },
    ],
    codeSnippit: `<Alert
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
</Alert>`,
  },
  {
    name: 'Avatar',
    description: 'Display user profile image, initials or fallback icon.',
    props: [
      {
        propName: 'alt',
        propsType: 'string',
        propsExample: 'alt="this is alt."',
      },
      {
        propName: 'altColor',
        propsType: 'rgba',
        propsExample: 'altColor="rgba(2,2,2,.2)"',
      },
      {
        propName: 'color',
        propsType: 'rgba',
        propsExample: 'color="rgba(2,2,2,.2)"',
      },
      {
        propName: 'radius',
        propsType: 'number',
        propsExample: 'radius={10}',
      },
      {
        propName: 'size',
        propsType: 'number',
        propsExample: 'size={10}',
      },
      {
        propName: 'src',
        propsType: 'string',
        propsExample: 'src="./Image1.jpeg"',
      },
    ],
    codeSnippit: `<Avatar
  alt='alt text'
  altColor='rgba(255, 255, 40, 0.7)'
  color='rgba(255, 255, 40, 0.2)'
  radius={5}
  size={50}
/>    
`,
  },
  {
    name: 'Badge',
    description: 'Display badge, pill or tag.',
    props: [
      {
        propName: 'color',
        propsType: 'rgba',
        propsExample: 'color="rgba(255, 0, 255, .7)',
      },
      {
        propName: 'fontColor',
        propsType: 'rgba',
        propsExample: 'fontColor="rgba(255, 255, 255, .7)"',
      },
      {
        propName: 'size',
        propsType: 'number',
        propsExample: 'size={20}',
      },
      {
        propName: 'radius',
        propsType: 'number',
        propsExample: 'radius={20}',
      },
      {
        propName: 'fullWidth',
        propsType: 'boolene',
        propsExample: 'fullWidth',
      },
      {
        propName: 'leftSection',
        propsType: 'icon',
        propsExample: 'leftSection=`<img src="./a.png" alt="" />`',
      },
      {
        propName: 'rightSection',
        propsType: 'icon',
        propsExample: 'rightSection=`<img src="./a.png" alt="" />`',
      },
    ],
    codeSnippit: `<Badge
  color='rgba(255, 255, 25, 0.3)'
  fontColor='rgba(0, 17, 17, 1)'
  fullWidth
  radius={20}
  size={24}
>
  A Badge
</Badge>
`,
  },
  {
    name: 'Burger',
    description: 'Open/close navigation button.',
    props: [
      {
        propName: 'opened',
        propsType: 'boolene',
        propsExample: 'opened={*boolene state*}',
      },
      {
        propName: 'size',
        propsType: 'number',
        propsExample: 'size={32}',
      },
      {
        propName: 'spacing',
        propsType: 'number',
        propsExample: 'spacing={5}',
      },
      {
        propName: 'transitionTime',
        propsType: 'number',
        propsExample: 'transitionTime={500}',
      },
    ],
    codeSnippit: `<Burger 
  size={24} 
  spacing={4} 
  transitionTime={400} 
  opened={isNavOpen}
/>`,
  },
  {
    name: 'Notification',
    description:
      'Show dynamic notifications and alerts to user, part of notifications system.',
    props: [
      {
        propName: 'color',
        propsType: 'rgba',
        propsExample: 'color="rgba(255, 255, 255, 0.7)"',
      },
      {
        propName: 'radius',
        propsType: 'number',
        propsExample: 'radius={10}',
      },
      {
        propName: 'loading',
        propsType: 'boolene',
        propsExample: 'loading',
      },
      {
        propName: 'disallowClose',
        propsType: 'boolene',
        propsExample: 'disallowClose',
      },
      {
        propName: 'title',
        propsType: 'string',
        propsExample: 'title="This is Title"',
      },
      {
        propName: 'icon',
        propsType: 'string',
        propsExample: 'icon="./ico.png"',
      },
      {
        propName: 'onClose',
        propsType: 'function',
        propsExample: 'onClose={() => console.log("closed")}',
      },
    ],
    codeSnippit: `<Notification
  onClose={() => console.log('closed')}
  color='rgba(255, 255, 255, 0.2)'
  title='This is title.'
  radius={10}
  loading
>
  This is sub title.
</Notification>    
`,
  },
  {
    name: 'Overlay',
    description:
      'Overlays given element with div element with any color and opacity.',
    props: [
      {
        propName: 'opacity',
        propsType: 'fractional number',
        propsExample: 'opacity={0.6}',
      },
      {
        propName: 'color',
        propsType: 'rgba',
        propsExample: 'color="rgba(255, 255, 255, 0.7)"',
      },
      {
        propName: 'radius',
        propsType: 'number',
        propsExample: 'radius={10}',
      },
      {
        propName: 'blur',
        propsType: 'number',
        propsExample: 'blur={10}',
      },
      {
        propName: 'zIndex',
        propsType: 'number',
        propsExample: 'zIndex={6}',
      },
    ],
    codeSnippit: `<Overlay
  blur={1}
  color='rgba(234, 78, 78, 0.7)'
  opacity={0.5}
  radius={6}
  zIndex={10}
/>    
`,
  },
  {
    name: 'Progress',
    description: 'Give user feedback for status of the task.',
    props: [
      {
        propName: 'value',
        propsType: 'number',
        propsExample: 'value={40}',
      },
      {
        propName: 'color',
        propsType: 'rgba',
        propsExample: 'color=rgba(255, 255, 255, 0.7)',
      },
      {
        propName: 'barColor',
        propsType: 'rgba',
        propsExample: 'barColor="rgba(255, 255, 255, 0.7)"',
      },
      {
        propName: 'size',
        propsType: 'number',
        propsExample: 'size={20}',
      },
      {
        propName: 'radius',
        propsType: 'number',
        propsExample: 'radius={10}',
      },
      {
        propName: 'striped',
        propsType: 'boolene',
        propsExample: 'striped',
      },
      {
        propName: 'animate',
        propsType: 'boolene',
        propsExample: 'animate',
      },
      {
        propName: 'label',
        propsType: 'string',
        propsExample: 'label="this is a label"',
      },
      {
        propName: 'sections',
        propsType: 'array of objects',
        propsExample: 'sections=[{ value: 40, color: "cyan"}]',
      },
    ],
    codeSnippit: `<Progress
  barColor='rgba(79, 208, 74, 0.3)'
  color='rgba(228, 136, 109, 0.5)'
  radius={7}
  size={20}
  value={70}
  striped
  animate
/>`,
  },
  {
    name: 'Ring Progress',
    description:
      'Give user feedback for status of the task with circle diagram',
    props: [
      {
        propName: 'label',
        propsType: 'String',
        propsExample: 'label="It goes in middle."',
      },
      {
        propName: 'roundCaps',
        propsType: 'boolene',
        propsExample: 'roundCaps',
      },
      {
        propName: 'sections',
        propsType: 'array of objects',
        propsExample: 'sections=[{ value: 40, color: "cyan },]',
      },
      {
        propName: 'size',
        propsType: 'number',
        propsExample: 'size={130}',
      },
      {
        propName: 'thickness',
        propsType: 'number',
        propsExample: 'thickness={13}',
      },
    ],
    codeSnippit: `<RingProgress
  label='It goes in middle.'
  sections={[
    { value: 40, color: 'cyan' },
    { value: 15, color: 'orange' },
    { value: 15, color: 'yellow' },
  ]}
  size={150}
  thickness={10}
  roundCaps
/>`,
  },
  {
    name: 'Skeleton',
    description: 'Indicate content loading state.',
    props: [
      {
        propName: 'height',
        propsType: 'number',
        propsExample: 'height={10}',
      },
      {
        propName: 'width',
        propsType: 'number',
        propsExample: 'width={10}',
      },
      {
        propName: 'animate',
        propsType: 'boolene',
        propsExample: 'animate',
      },
      {
        propName: 'visible',
        propsType: 'boolene',
        propsExample: 'visible',
      },
      {
        propName: 'circle',
        propsType: 'boolene',
        propsExample: 'circle',
      },
      {
        propName: 'radius',
        propsType: 'number',
        propsExample: 'radius={4}',
      },
    ],
    codeSnippit: `<Skeleton
  height={10}
  width={300}
  radius={5}
  animate
  visible
/>`,
  },
];

// Button, Checkbox, Input Field,Radio Field,

// {
//   name: '',
//   description: '',
//   props: [
//     {
//       propName: '',
//       propsType: '',
//       propsExample: '',
//     },
//   ],
//   demoComponent: ``,
//   codeSnippit: ``,
// },
