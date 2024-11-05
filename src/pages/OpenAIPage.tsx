import {config} from '../config';
import XTable from '../components/XTable';

const OpenAIPage = () => { 
  const OPENAI_API = config.authApiUrl + "/openai/models"
  
  return (
    <div>
      <h2>OpenAI Models</h2>
      <section className="widget">
        <XTable apiUrl={OPENAI_API}/>
      </section>
    </div>
  )
}

export default OpenAIPage