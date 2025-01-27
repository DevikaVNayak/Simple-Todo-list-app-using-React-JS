import styles from './footer.module.css'
export default function Footer({compleatedTodos,totalTodos}){
return  (<div className={styles.footer}>
    <span >Compleated Todos:{compleatedTodos}</span>
     <span>Total Todos:{totalTodos}</span>
</div>
)
}