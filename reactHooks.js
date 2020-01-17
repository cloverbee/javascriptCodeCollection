//写一个promise chain
//看react native开发视频
//撸一遍对应面经
//写所有面经里面的算法
//简历里面的东西 概念 
//用Hooks写一个东西  

class App extends React.Component{

    state = {value:""};//this.state = {}; as constructor version
    handleChange = (newValue) => {
        this.setState({value: newValue});
    }
    render(){
        return(
            <MyInput value={this.state.value} onChange={this.handleChange}/>
        )
    }
}
class MyInput extends React.Component{
    handleChange = (e) => {
        this.props.onChange(e.target.value);
    } 
    render(){
        return(
            <input value={this.props.value} onChange={this.handleChange}/>
        )
    }
} 

//Hooks
function App(){
    const [value, setValue] = React.useState("");// takes in a single argument, the initial value for the state
    //returns is an array with the first item being the piece of state and the second item being a function to update that state.
    function handleChange(newValue){
        setValue(newValue);
    }
    return <MyInput value={value} onChange={handleChange}/>
}
function MyInput(props){////////
    function handleChange(e){//////////
        props.onChange(e.target.value);
    }
    return <input value={props.value} onChange={handleChange}/>///////////
}

//use repos for No visual logic instead of HOC
function useRepos (id) {
    const [ repos, setRepos ] = React.useState([])
    const [ loading, setLoading ] = React.useState(true)
  
    React.useEffect(() => {
      setLoading(true)
  
      fetchRepos(id)
        .then((repos) => {
          setRepos(repos)
          setLoading(false)
        })
    }, [id])
  
    return [ loading, repos ]
  }
  function ReposGrid ({ id }) {
    const [ loading, repos ] = useRepos(id);
  }

//Router 手写 
return(
    <BrowserRouter>
        <Switch>
            <Route exact={true} path='/' component={Home} />

        </Switch>
    </BrowserRouter>
)