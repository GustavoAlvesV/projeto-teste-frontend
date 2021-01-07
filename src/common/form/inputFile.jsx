import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}> 
         <div class="form-group">
                    <label for="exampleInputFile">Importar</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input  {...props.input} type="file" class="custom-file-input" id="exampleInputFile" />
                      </div>
                    </div>
                  </div>
    </Grid> 
)