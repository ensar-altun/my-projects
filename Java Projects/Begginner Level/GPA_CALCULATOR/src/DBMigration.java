import java.sql.Connection;
import java.sql.Statement;
import java.sql.SQLException;

public class DBMigration {

    public static void migrate() {
        String sql = """
            CREATE TABLE IF NOT EXISTS lectures (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                weight INT NOT NULL,
                grade DOUBLE PRECISION
            )
        """;

        try (Connection conn = DbConnect.connect();
             Statement stmt = conn.createStatement()) {

            stmt.execute(sql);
            System.out.println("Migration completed!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
