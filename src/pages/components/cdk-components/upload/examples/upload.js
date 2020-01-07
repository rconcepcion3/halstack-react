import { DxcUpload } from "@diaas/dxc-react-cdk";

const code = `() => {
  async function callbackFunc(file) {
    console.log(file);
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  return <DxcUpload margin="small" callbackUpload={callbackFunc} />;
}`;

const scope = {
  DxcUpload
};

export default { code, scope };
