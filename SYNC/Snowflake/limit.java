@Entity
@Table(name = "LIMITS")
public class Limit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "LIMIT_NAME")
    private String limitName;
    
    @Column(name = "MAX_VALUE")
    private Double maxValue;
    
    @Column(name = "MIN_VALUE")
    private Double minValue;
    
    @Column(name = "EFFECTIVE_DATE")
    private LocalDate effectiveDate;

    // Getters and Setters
}
