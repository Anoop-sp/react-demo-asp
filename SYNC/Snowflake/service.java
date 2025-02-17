@Service
public class LimitService {
    
    private final LimitRepository limitRepository;
    private final JdbcTemplate snowflakeJdbcTemplate;
    
    public LimitService(LimitRepository limitRepository, 
                       JdbcTemplate snowflakeJdbcTemplate) {
        this.limitRepository = limitRepository;
        this.snowflakeJdbcTemplate = snowflakeJdbcTemplate;
    }
    
    public List<Limit> getAllLimits() {
        return limitRepository.findAllLimits();
    }
    
    public void createLimitUsingStoredProc(Limit limit) {
        snowflakeJdbcTemplate.execute(
            "CALL CREATE_LIMIT(?, ?, ?, ?, ?)",
            (CallableStatementCallback<Boolean>) cs -> {
                cs.setString(1, limit.getLimitName());
                cs.setDouble(2, limit.getMaxValue());
                cs.setDouble(3, limit.getMinValue());
                cs.setDate(4, Date.valueOf(limit.getEffectiveDate()));
                cs.registerOutParameter(5, Types.VARCHAR);
                cs.execute();
                
                String result = cs.getString(5);
                if(!"SUCCESS".equals(result)) {
                    throw new RuntimeException("Stored procedure failed: " + result);
                }
                return true;
            });
    }
}
