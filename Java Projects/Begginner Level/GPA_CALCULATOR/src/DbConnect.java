
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbConnect {
    private static final String URL = "YOUR_DB_URL";
    private static final String USER = "YOUR_DB_USERNAME";
    private static final String PASSWORD = "YOUR_DB_PASSWORD";

    public static Connection connect() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}
