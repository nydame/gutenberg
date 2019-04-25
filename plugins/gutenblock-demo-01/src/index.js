const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const blockStyle = {
    backgroundColor: "#944",
    color: "#fff",
    padding: "20px",
}

registerBlockType(
    'gutenblock-demo/demo-01-static-esnext',
    {
        title: __('Example: Static (esnext)'),
        icon: 'universal-access-alt',
        category: 'layout',
        edit() {return (<div style={blockStyle}>Just some static content thanks to JSX (EDITOR) :)</div>);},
        save() {return (<div style={blockStyle}>Just some static content thanks to JSX (FRONT) :)</div>);}
    }
);