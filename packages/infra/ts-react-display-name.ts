import {addDisplayNameTransformer} from 'ts-react-display-name'

export default function() {
  return addDisplayNameTransformer({
    funcTypes: [
      'React.FunctionComponent',
      'React.FC',
      'FC',
      'FunctionComponent',
    ],
    factoryFuncs: [
      'React.forwardRef',
      'React.memo',
      'forwardRef',
      'memo',
      'styled',
    ],
  })
}
