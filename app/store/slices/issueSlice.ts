// reducers/counterSlice.ts
import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import { getAllIssueThnuk } from './issueThunk';

export interface Issue {
  id: number | null;
  title: string
  description:string
  createdAt:Object|null
  satus:Status
}
enum Status {
    OPEN,
    IN_PROGRESS,
    CLOSED
}


const initialState={
    issues:[] as Issue[]
}

export const getAllIssues=createAsyncThunk("issue/getAllIssue", async (_,thunkAPI)=>{
    return getAllIssueThnuk (`/issues/all`,thunkAPI)
  })

const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
   
  },
  extraReducers:(builder)=>{
    builder
    .addCase(getAllIssues.pending,(state)=>{

    })
    .addCase(getAllIssues.fulfilled,(state,{payload})=>{
        const {data}=payload
        console.log(data);
        
        state.issues=data
    })
  }
});

// export const { increment, decrement } = counterSlice.actions;
export default issueSlice.reducer;
