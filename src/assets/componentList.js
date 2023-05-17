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
    name: 'Button',
    description: 'A custom Button.',
    props: [
      {
        propName: 'bgColor',
        propsType: 'rgba',
        propsExample: "bgColor = 'transparent'",
      },
      {
        propName: 'label',
        propsType: 'text',
        propsExample: "label = 'Button'",
      },
      {
        propName: 'mainColor',
        propsType: 'rgba',
        propsExample: "mainColor = 'rgba(255,255, 255 ,0.7)'",
      },
      {
        propName: 'size',
        propsType: '{key:string}',
        propsExample: "size = { height: '44px', width: '102px' }",
      },
      {
        propName: 'textProps',
        propsType: '{key:string}',
        propsExample:
          "textProps = { lineHeight: '42px', fontSize: '17px', color: '#fff' }",
      },
      {
        propName: 'border',
        propsType: '{key:string}',
        propsExample:
          "border = { size: '2px', type: 'solid', radius: '6px', color: 'rgba(255, 255, 255, 0.7)' }",
      },
      {
        propName: 'hoverTextColor',
        propsType: 'rgba',
        propsExample: "hoverTextColor = 'rgba(0 ,0, 0)'",
      },
    ],
    codeSnippit: `<Btn
  bgColor='transparent'
  mainColor='rgba(255,255, 255 ,0.7)'
  size={height:'44px', width:'102px'}
  textProps={lineHeight: '42px',
    fontSize: '17px',
    color: '#fff'}
  border={size: '2px',
    type: 'solid',
    radius: '6px',
    color: 'rgba(255,255, 255 ,0.7)'}
  hoverTextColor={rgba(0, 0, 0, 1)}
>
  Button
</Btn>`,
  },
  {
    name: 'CheckBox',
    description: 'A custom Checkbox.',
    props: [
      {
        propName: 'size',
        propsType: 'number',
        propsExample: 'size={40}',
      },
      {
        propName: 'strokeWidth',
        propsType: 'number',
        propsExample: 'strokeWidth={4}',
      },
      {
        propName: 'strokeColor',
        propsType: 'rgba',
        propsExample: "strokeColor='rgb(50, 205, 50, 1)'",
      },
      {
        propName: 'radio',
        propsType: 'boolean',
        propsExample: 'radio={true}',
      },
    ],
    codeSnippit: `<Checkbox
  size={40}
  strokeWidth={4}
  strokeColor='limegreen'
  radio
/>`,
  },
  {
    name: 'Dropdown',
    description: 'A custom Dropdown.',
    props: [
      {
        propName: 'Multiple',
        propsType: 'boolean',
        propsExample: 'Multiple',
      },
      {
        propName: 'Searchable',
        propsType: 'boolean',
        propsExample: 'Searchable',
      },
      {
        propName: 'dropdownBorder',
        propsType: 'rgba',
        propsExample: "'rgba(33, 33, 33,1)'",
      },
      {
        propName: 'fontColor',
        propsType: 'rgba',
        propsExample: "fontColor='rgba(255, 255, 255,1)'",
      },
      {
        propName: 'hoverColor',
        propsType: 'rgba',
        propsExample: "hoverColor= 'rgba(159, 195, 248, 0.439)'",
      },
      {
        propName: 'menuBgColor',
        propsType: 'rgba',
        propsExample: "menuBgColor= 'rgba(0, 0, 0, 0)'",
      },
      {
        propName: 'menuBorder',
        propsType: 'border css',
        propsExample: "menuBorder='1px solid #ccc'",
      },
      {
        propName: 'menuZindex',
        propsType: 'number',
        propsExample: 'menuZindex={4}',
      },
      {
        propName: 'onChange',
        propsType: 'function',
        propsExample: 'onChange={(v)=>console.log(v)}',
      },
      {
        propName: 'options',
        propsType: 'array of objects',
        propsExample: "options={[{ value: 'a', label: 's' }]}",
      },
      {
        propName: 'placeHolder',
        propsType: 'string',
        propsExample: "placeHolder= 'Select...'",
      },
      {
        propName: 'searchBorder',
        propsType: 'border css',
        propsExample: "searchBorder='1px solid #ccc'",
      },
      {
        propName: 'selectedColor',
        propsType: 'rgba',
        propsExample: "selectedColor= 'rgba(0 ,0, 0, 0.1)'",
      },
      {
        propName: 'tagBgColor',
        propsType: 'rgba',
        propsExample: "tagBgColor= 'rgba(255, 255 ,255 ,0.1)'",
      },
    ],
    codeSnippit: `<Dropdown
  Multiple
  Searchable
  dropdownBorder='1px solid #ccc'
  fontColor='rgba(255,255,255,1)'
  hoverColor='#9fc3f870'
  menuBgColor='transparent'
  menuBorder='1px solid #ccc'
  menuZindex={4}
  onChange={(v)=>console.log(v)}
  options={[{ value:'a', label:'s'}]}
  placeHolder='Select...'
  searchBorder='1px solid #ccc'
  selectedColor='rgba(0 ,0, 0, 0.1)'
  tagBgColor='rgba(255,255,255,0.1)'
/>`,
  },
  {
    name: 'Input',
    description: 'A Custom Input field.',
    props: [
      {
        propName: 'errorBgColor',
        propsType: 'rgba',
        propsExample: "errorBgColor= 'rgba(0, 0, 0, 0)'",
      },
      {
        propName: 'errorColor',
        propsType: 'rgba',
        propsExample: "errorColor= 'rgba(237, 11, 11, 1)'",
      },
      {
        propName: 'errorMessage',
        propsType: 'string',
        propsExample: "errorMessage= 'The Email is invalid'",
      },
      {
        propName: 'fontColor',
        propsType: 'rgba',
        propsExample: "fontColor= 'rgba(255, 255, 255, 1)'",
      },
      {
        propName: 'inputBorder',
        propsType: 'border css',
        propsExample: "inputBorder= '1px solid #fff'",
      },
      {
        propName: 'inputFieldBg',
        propsType: 'rgba',
        propsExample: "inputFieldBg= 'rgba(0, 0, 0, 0)'",
      },
      {
        propName: 'inputRef',
        propsType: 'ref',
        propsExample: 'inputRef={InputRef}',
      },
      {
        propName: 'labelColor',
        propsType: 'rgba',
        propsExample: "labelColor= 'rgba(255, 255, 255, 1)'",
      },
      {
        propName: 'labelFontSize',
        propsType: 'number',
        propsExample: 'labelFontSize={2}',
      },
      {
        propName: 'placeholder',
        propsType: 'string',
        propsExample: "placeholder= 'Enter Email...'",
      },
      {
        propName: 'placeholderColor',
        propsType: 'rgba',
        propsExample: "placeholderColor= 'rgba(170, 170, 170, 1)'",
      },
      {
        propName: 'type',
        propsType: 'string',
        propsExample: "type='email'",
      },
    ],
    codeSnippit: `<Input
  errorBgColor='transparent'
  errorColor='#ed0b0bff'
  errorMessage='The Email is invalid'
  fontColor='rgba(255, 255, 255, 1)'
  inputBorder='1px solid #fff'
  inputFieldBg='rgba(0, 0, 0, 0)'
  labelColor='rgba(255, 255, 255, 1)'
  labelFontSize={2}
  placeholder='Enter Email...'
  type='email'
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
  onClose={() =>console.log('closed')}
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
  {
    name: 'SwitchBox',
    description: 'A Custom Switchbox.',
    props: [
      {
        propName: 'circleColor',
        propsType: 'rgba',
        propsExample: "circleColor='rgba( 0,0,0,0)'",
      },
      {
        propName: 'circleSize',
        propsType: 'number',
        propsExample: 'circleSize={2}',
      },
      {
        propName: 'sliderColor',
        propsType: 'rgba',
        propsExample: "sliderColor='rgba( 0,0,0,0)'",
      },
      {
        propName: 'sliderHeight',
        propsType: 'number',
        propsExample: 'sliderHeight={1}',
      },
      {
        propName: 'sliderWidth',
        propsType: 'number',
        propsExample: 'sliderWidth={1}',
      },
    ],
    codeSnippit: `<SwitchBox
  circleColor='rgba(0, 0, 0, 0)'
  circleSize={2}
  sliderColor='rgba(0, 0, 0, 0)'
  sliderHeight={1}
  sliderWidth={1}
/>`,
  },
];
