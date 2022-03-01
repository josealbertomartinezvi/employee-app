
interface ConfigKeys {
    PRUEBA_API: string | undefined;
}

const configKeys: ConfigKeys = {
    PRUEBA_API: process.env.REACT_APP_PRUEBA_API,
};
  
export default configKeys;