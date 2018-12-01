# react-form-label
A form label component for ReactJS with validation for required fields and pattern matching.

- [Properties](#properties)
- [Usage](#usage)
- [License](#license)

## Properties

| Prop Name       | Type    | Default | Description                     |
|-----------------|---------|---------|---------------------------------|
| label           | String  | ""      | Text for the label              |
| patternMessage  | String  | ""      | Text for pattern error message  |
| requiredMessage | String  | "*"     | Text for required error message |
| pattern         | RegExp  | /./     | Regular expression to match     |
| required        | Boolean | false   | Is the field required           |
| value           | *       | ""      | Value to check                  |

## Usage
```jsx

import ReactFormLabel from 'react-form-label';

export default class MyClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Title: "My Title"
        }
    }

    render() {
        return (
            <div>
                <ReactFormLabel 
                    label="Title" 
                    value={this.state.Title} 
                    required={true} 
                    pattern={/^([a-z0-9]){1,7}(,[a-z0-9]{1,7})*$/} 
                    patternMessage="Must less than 8 characters and comma separated (no spaces)"
                    requiredMessage="*"
                />
                <input type="text" value={this.state.Title}/>
            </div>
        )
    }
}
```

## License
MIT Licensed.
