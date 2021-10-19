import './my-lib.module.css';

/* eslint-disable-next-line */
export interface MyLibProps {}

export function MyLib(props: MyLibProps) {
  console.log('test semver');
  return (
    <div>
      <h1>Welcome to MyLib!</h1>
    </div>
  );
}

export default MyLib;
