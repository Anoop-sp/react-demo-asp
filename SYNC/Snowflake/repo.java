public interface LimitRepository extends JpaRepository<Limit, Long> {
    @Query(value = "SELECT * FROM LIMITS", nativeQuery = true)
    List<Limit> findAllLimits();
}
