import { Stack, Text, Group, Card, Image } from '@mantine/core';

import './App.css';

function Create() {
  return (
    <>
    <div className="Create">
        <h1 style={{margin: '1rem'}}>Company Name</h1>
    </div>

<div className="card" style={{  borderRadius: '15px'}}>
<div className="card-body">
<p className="text-left">🏁4000/10000</p>
<div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width: '50%', borderRadius:'8px'}}></div>
</div>
<div className="card" style={{borderRadius: '30px', padding: '10px 20px'}}>
  <div className="card-body" >
  <h3 style={{margin: '5px'}}>$40 Voucher</h3>
  <button style={{margin: '5px'}} type="button" class="btn btn-primary">Primary</button>
  </div>
</div>
</div>
</div>
<Text>Hi</Text>
</>
  );
}

export default Create;
