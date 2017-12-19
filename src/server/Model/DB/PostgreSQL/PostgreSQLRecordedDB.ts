import * as DBSchema from '../DBSchema';
import { RecordedDB } from '../RecordedDB';

class PostgreSQLRecordedDB extends RecordedDB {
    /**
    * create table
    * @return Promise<void>
    */
    public create(): Promise<void> {
        let query = `create table if not exists ${ DBSchema.TableName.Recorded } (`
            + 'id serial primary key, '
            + 'programId bigint not null, '
            + 'channelId bigint not null, '
            + 'channelType text not null, '
            + 'startAt bigint not null, '
            + 'endAt bigint not null, '
            + 'duration bigint not null, '
            + 'name text not null, '
            + 'description text null, '
            + 'extended text null, '
            + 'genre1 integer null, '
            + 'genre2 integer null, '
            + 'videoType text null, '
            + 'videoResolution text null, '
            + 'videoStreamContent integer null, '
            + 'videoComponentType integer null, '
            + 'audioSamplingRate integer null, '
            + 'audioComponentType integer null, '
            + 'recPath text, '
            + 'ruleId integer, '
            + 'thumbnailPath text, '
            + 'recording boolean '
        + ');'

        return this.operator.runQuery(query);
    }

    /**
    * all columns
    * @return string
    */
    public getAllColumns(): string {
        return 'id, programId as "programId", channelId as "channelId", channelType as "channelType", startAt as "startAt", endAt as "endAt", duration, name, description, extended, genre1, genre2, videoType as "videoType", videoResolution as "videoResolution", videoStreamContent as "videoStreamContent", videoComponentType as "videoComponentType", audioSamplingRate as "audioSamplingRate", audioComponentType as "audioComponentType", recPath as "recPath", ruleId as "ruleId", thumbnailPath as "thumbnailPath", recording';
    }
}

export default PostgreSQLRecordedDB;

