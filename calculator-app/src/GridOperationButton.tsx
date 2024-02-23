import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material"

interface GridOperationButtonProgs{
    operation:string;
    selectOperation:(operation:string)=>void;
    selectedOperation: string;
}

const StyleButton=styled(Button)<{ selected: boolean}>((props)=>({
    backgroundColor: "rgb(254,241,73,.1)",
    borderColor: props.selected? "#fff" : "rgb(254,241,73, 0.5)",
}));

export const GridOperationButton: React.FC<GridOperationButtonProgs>=({
    operation,
    selectOperation,
    selectedOperation,
})=>{
    return(
        <Grid item xs={3}>
            <StyleButton 
            fullWidth 
            variant="outlined" 
            onClick={()=>selectOperation(operation)}
            selected={selectedOperation===operation}>
                {operation}
            </StyleButton>
        </Grid>
    );
};