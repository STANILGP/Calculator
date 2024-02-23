import { Button, Grid } from "@mui/material"

interface GridDigitButtonProgs{
    digit:string;
    enterDigit:(digit:string)=>void;
    xs?:number;
}

export const GridDigitButton: React.FC<GridDigitButtonProgs>=({
    digit,
    enterDigit,
    xs=3
})=>{
    return(
        <Grid item xs={xs}>
            <Button fullWidth variant="outlined" onClick={()=>enterDigit(digit)}>
                {digit}
            </Button>
        </Grid>
    );
};