import sqlite3

con = sqlite3.connect('./hydat/Hydat.sqlite3')
cur = con.cursor()

# tables
q = cur.execute('''
  SELECT name FROM sqlite_master WHERE type='table'
''')
print(q.fetchall())
print()

# table schema
print(cur.execute('pragma table_info("STATIONS")').fetchall())
print()
print(cur.execute('pragma table_info("ANNUAL_STATISTICS")').fetchall())
print()

# query
q = cur.execute('''
  SELECT 
    s.STATION_NUMBER,
    s.STATION_NAME,
    COUNT(d.YEAR) as YEAR_COUNT,
    AVG(IFNULL(d.MEAN,0)) as MEAN,
    AVG(IFNULL(d.MIN_MONTH,0)) as MIN_MONTH,
    AVG(IFNULL(d.MAX_MONTH,0)) as MAX_MONTH 
  FROM ANNUAL_STATISTICS as d
  JOIN STATIONS as s
  ON d.STATION_NUMBER = s.STATION_NUMBER
  GROUP BY s.STATION_NUMBER
  HAVING YEAR_COUNT > 100
''')

print(q.fetchall())

