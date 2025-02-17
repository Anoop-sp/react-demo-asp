@RestController
public class LimitController {
    
    private final LimitService limitService;
    
    public LimitController(LimitService limitService) {
        this.limitService = limitService;
    }
    
    @GetMapping("/limits")
    public ResponseEntity<List<Limit>> getAllLimits() {
        return ResponseEntity.ok(limitService.getAllLimits());
    }
    
    @PostMapping("/limits")
    public ResponseEntity<Void> createLimit(@RequestBody Limit limit) {
        limitService.createLimitUsingStoredProc(limit);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
