// write your custom hook here to control your checkout form
import { useLocalstorage } from './useLocalStorage';

export const useForm = ( key, initialValue ) => {
  const [ values, setValues ] = useLocalstorage( key, initialValue );

  const handleChanges = event => {
    setValues({
      ...values,
      [ event.target.name ]: event.target.value
    });
  };

  return [ values, handleChanges ];
};