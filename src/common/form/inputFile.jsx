import React from 'react'
import Grid from '../layout/grid'

export default props => (
  <Grid cols={props.cols}>
    <div className="form-group">
      <label htmlFor={props.name}>Importar</label>
      <div className="input-group">
        <div className="custom-file">
          <input {...props.input} name="importName" type="file" 
          className="custom-file-input"  
          accept=".xlsx, .xls, .csv"/>
        </div>
      </div>
    </div>
  </Grid>
)