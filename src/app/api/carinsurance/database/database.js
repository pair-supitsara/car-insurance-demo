
import db from '../../../../lib/db'

const database = {
    async dfnGetuserinfo() {
        const sql = `declare @listtable varchar(50) set @listtable  = 'outbound_follow_online'
        select top 1
        a.list_source,a.typedealer,a.name,a.year_car,a.brand,a.model,a.expdate,a.system_type
        , aq_expdate=aq.expdate,aq_year_car=aq.year_car,aq_brand=aq.brand,aq_model=aq.model, colorlist = isnull(color,'Blue'), media
        from silkspan03.dbo.outbound_follow_online as a with (nolock) 
        left join silkspan03.dbo.agent_quote aq with (nolock) 
            on aq.list_id = a.id 
            and aq.list_table = @listtable 
            and aq.year_car is not null 
            and aq.brand is not null 
            and aq.brand <> '--เลือก--' 
            and aq.model is not null 
            and aq.model <> '--เลือก--' 
        where 1=1
        and a.id = ${1250000007}
        order by quote_date desc`
        const result = await db.query(sql)
        
        return result.recordset
    }
}

export default database